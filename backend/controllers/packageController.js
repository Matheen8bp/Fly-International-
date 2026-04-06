import Package from '../models/Package.js';

// Create a new package
export const createPackage = async (req, res) => {
  try {
    const { title, location, price, duration, description, image } = req.body;
    
    const newPackage = new Package({
      title,
      location,
      price,
      duration,
      description,
      image
    });

    const savedPackage = await newPackage.save();
    res.status(201).json(savedPackage);
  } catch (error) {
    res.status(500).json({ message: 'Error creating package', error: error.message });
  }
};

// Get all packages
export const getPackages = async (req, res) => {
  try {
    const packages = await Package.find().sort({ createdAt: -1 });
    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching packages', error: error.message });
  }
};
