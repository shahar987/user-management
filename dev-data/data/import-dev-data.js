const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./../../models/userModel');

dotenv.config();

const DB = 'mongodb://127.0.0.1:27017/userManagement'

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('db connected');
  });

// READ JSON FILE
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));

const addPassword = async () => {
  try {
    const password = await bcrypt.hash('pass1234', 12);
    users.map((el) => (el.password = password));
  } catch (err) {
    console.log(err);
  }
};

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    //await addPassword();
    await User.create(users, { validateBeforeSave: false });
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await User.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
