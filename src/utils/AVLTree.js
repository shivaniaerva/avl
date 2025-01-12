class AVLTree {
    constructor() {
        this.root = null;
    }

    insertData(data) {
        this.root = this.insert(this.root, data);
    }

    insert(root, data) {
        if (root === null) return new AVLNode(data);

        if (data < root.data) {
            root.left = this.insert(root.left, data);
        } else if (data > root.data) {
            root.right = this.insert(root.right, data);
        }

        // Update height and balance
        root.height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
        const balance = this.getBalance(root);

        // Balance the tree
        if (balance > 1 && data < root.left.data) return this.rightRotate(root);
        if (balance < -1 && data > root.right.data) return this.leftRotate(root);
        if (balance > 1 && data > root.left.data) {
            root.left = this.leftRotate(root.left);
            return this.rightRotate(root);
        }
        if (balance < -1 && data < root.right.data) {
            root.right = this.rightRotate(root.right);
            return this.leftRotate(root);
        }

        return root;
    }

    leftRotate(z) {
        const y = z.right;
        z.right = y.left;
        y.left = z;
        z.height = Math.max(this.getHeight(z.left), this.getHeight(z.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        return y;
    }

    rightRotate(y) {
        const x = y.left;
        y.left = x.right;
        x.right = y;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        return x;
    }

    getHeight(root) {
        if (root === null) return 0;
        return root.height;
    }

    getBalance(root) {
        if (root === null) return 0;
        return this.getHeight(root.left) - this.getHeight(root.right);
    }

    // Utility method to get the tree data in a format that ReactD3Tree can use
    getTreeData() {
        return this.formatTreeData(this.root);
    }

    formatTreeData(root) {
        if (!root) return null;
        return {
            name: root.data,
            children: [
                this.formatTreeData(root.left),
                this.formatTreeData(root.right)
            ].filter(child => child !== null)
        };
    }
}

class AVLNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

export default AVLTree;
