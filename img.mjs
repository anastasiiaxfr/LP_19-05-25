import fs from 'fs-extra';
import path from 'path';
import sharp from 'sharp';

// Get the current directory of the module using import.meta.url

// Set the root folder path where images are stored, relative to the current script
// Correct the path construction by not adding an absolute path multiple times
const folderPath = '/src/app/assets/img';


// Function to convert an image to webp
const convertTowebp = async (imagePath, outputPath) => {
	try {
		// Convert image to webp using sharp
		await sharp(imagePath)
			.toFormat('webp')
			.toFile(outputPath);

		console.log(`Converted ${imagePath} to ${outputPath}`);
	} catch (error) {
		console.error(`Error converting ${imagePath}: ${error.message}`);
	}
};

// Function to recursively process files in directories
const processImages = async dirPath => {
	try {
		// Read all files and subdirectories in the given directory
		const files = await fs.readdir(dirPath);

		for (const file of files) {
			const filePath = path.join(dirPath, file);

			const stat = await fs.stat(filePath);
			if (stat.isDirectory()) {
				// Recursively process subdirectory
				await processImages(filePath);
			} else {
				// Check if the file is jpg or png
				if (
					['.jpeg', '.png', '.jpg'].includes(
						path.extname(file).toLowerCase()
					)
				) {
					const outputPath = path.join(
						dirPath,
						`${path.parse(file).name}.webp`
					);

					// Convert the image to webp format
					await convertTowebp(filePath, outputPath);
				}
			}
		}
	} catch (error) {
		console.error(
			`Error processing directory ${dirPath}: ${error.message}`
		);
	}
};

// Start processing images in the root folder
processImages(folderPath).catch(error => {
	console.error('Error processing images:', error.message);
});
