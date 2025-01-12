import React, { useState } from 'react';
import ReactD3Tree from 'react-d3-tree';
import AVLTree from '../utils/AVLTree'; // Adjust the import based on your actual path

const TreeVisualizer = () => {
    const [inputValue, setInputValue] = useState(''); // Store the input value for each new node
    const [treeData, setTreeData] = useState(null); // To store the tree data
    const [avlTree] = useState(new AVLTree()); // Create a new AVLTree instance

    // Handle change in input field
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // Add new node to the AVL tree
    const handleAddNode = () => {
        if (inputValue.trim() === '') {
            alert('Please enter a value');
            return;
        }
        const value = parseInt(inputValue.trim(), 10); // Parse the input value
        if (isNaN(value)) {
            alert('Invalid number');
            return;
        }
        avlTree.insertData(value); // Insert the value into the AVL tree
        setTreeData(avlTree.getTreeData()); // Update the tree data to trigger re-render
        setInputValue(''); // Reset the input field
    };

    return (
        <div>
            <h1>AVL Tree Visualizer</h1>

            {/* Input field for entering node value */}
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter node value"
            />

            {/* Button to insert a new node */}
            <button onClick={handleAddNode}>Add Node</button>

            {/* Display the tree visualization */}
            <div style={{ width: '100%', height: '500px' }}>
                {treeData && (
                    <ReactD3Tree
                        data={treeData}
                        orientation="vertical" // Change orientation to vertical
                        translate={{ x: 600, y: 50 }} // Adjust starting position of the tree
                        pathFunc="straight" // Optional: Makes the tree lines straight
                    />
                )}
            </div>
        </div>
    );
};

export default TreeVisualizer;
