import fs from 'node:fs/promises';
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors'; // Przenieś import cors tutaj

const app = express();
app.use(cors()); // Teraz można bezpiecznie użyć app, ponieważ został zainicjalizowany

app.use(bodyParser.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.post('/signin', async (req, res) => {
  const signData = req.body.signInFormData;

  if (signData === null || signData.signInFormData === null) {
    return res
      .status(400)
      .json({ message: 'Missing data.' });
  }

  if (
    signData.userData.email === null ||
    !signData.userData.email.includes('@') ||
    signData.userData.password === null
  ) {
    return res.status(400).json({
      message:
        'Missing data: Email, name, street, postal code or city is missing.',
    });
  }

  const newSignInSubmit = {
    ...signData,
    id: (Math.random() * 1000).toString(),
  };
  const orders = await fs.readFile('./data/signin.json', 'utf8');
  const allOrders = JSON.parse(orders);
  allOrders.push(newSignInSubmit);
  await fs.writeFile('./data/signin.json', JSON.stringify(allOrders));
  res.status(201).json({ message: 'Order created!' });
});

app.post('/signup', async (req, res) => {
  const signUpData = req.body.signUpFormData;

  if (signUpData === null || signUpData.signUpFormData === null) {
    return res
      .status(400)
      .json({ message: 'Missing data.' });
  }

  if (
    signUpData.userData.name === null ||
    signUpData.userData.email === null ||
    !signUpData.userData.email.includes('@') ||
    signUpData.userData.password === null 
  ) {
    return res.status(400).json({
      message:
        'Missing data: Email, name, street, postal code or city is missing.',
    });
  }

  const newSignUpSubmit = {
    ...signUpData,
    id: (Math.random() * 1000).toString(),
  };
  const signUpLogins = await fs.readFile('./data/signup.json', 'utf8');
  const allLogins = JSON.parse(signUpLogins);
  allLogins.push(newSignUpSubmit);
  await fs.writeFile('./data/signup.json', JSON.stringify(allLogins));
  res.status(201).json({ message: 'Login created!' });
});

app.use((req, res) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: 'Not found' });
});

app.listen(3000);
