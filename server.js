const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection (your Local Database)
mongoose.connect('mongodb://127.0.0.1:27017/careerDB')
    .then(() => console.log("✅ MongoDB Connected!"))
    .catch(err => console.error("❌ Connection Error:", err));

// Schema:
const userSchema = new mongoose.Schema({
    name: String,
    education: String,
    experience: String,
    interests: [String],
    skills: [String],
    recommendations: Array, 
    date: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// --- LOGIN/SIGNUP SYSTEM START ---


const authSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const AuthUser = mongoose.model('AuthUser', authSchema);

// 2. Signup Route 
app.post('/api/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await AuthUser.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists with this email address.!" });

        const newUser = new AuthUser({ email, password });
        await newUser.save();
        res.status(201).json({ message: "Account Created!" });
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error: Registration process failed.!" });
    }
});

// 3. Login Route 
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await AuthUser.findOne({ email, password });
        if (user) {
            res.status(200).json({ message: "Success", userEmail: user.email });
        } else {
            res.status(401).json({ message: "Authentication failed: Invalid email or password." });
        }
    } catch (err) {
        res.status(500).json({ error: "Server Error!" });
    }
});

// --- LOGIN/SIGNUP SYSTEM END ---

app.post('/api/save', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).json({ message: "Data Saved in MongoDB!" });
    } catch (err) {
        res.status(500).json({ error: "Failed to save data to the database." });
    }
});



app.get('/api/all', async (req, res) => {
    try {
        
        const allData = await User.find().sort({ _id: -1 }); 
        res.json(allData);
    } catch (err) {
        res.status(500).json({ error: "Error: Unable to delete the record. Please try again." });
    }
});


app.delete('/api/delete/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Record deleted successfully!" });
    } catch (err) {
        res.status(500).json({ error: "Could not delete the record. Please try again." });
    }
});

const PORT = 3000; 
app.listen(PORT, () => {
    console.log(`🚀 Server is running successfully!`);
    console.log(`🔗 Click or Copy: http://localhost:${PORT}`);
});