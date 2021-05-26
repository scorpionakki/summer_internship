// RedBlackTree_SI.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
using namespace std;
struct RBTN {
    int num;
    char col;
};

struct RBTNConn {
    struct RBTN* rbtn = nullptr;
    struct RBTNConn* left = nullptr;
    struct RBTNConn* right = nullptr;
};

RBTNConn* root = nullptr;

class RedBlackTree {
public:
    void addNode(int val)
    {
        struct RBTNConn* newNode = new RBTNConn;
        newNode->rbtn = new RBTN;
        newNode->rbtn->col = 'R';
        newNode->rbtn->num = val;

        if (root == nullptr)
        {
            root = newNode;
            return;
        }

        placeNode(root, newNode);
    }

private:
    void placeNode(RBTNConn* currNode, RBTNConn* newNode)
    {
        if (currNode->rbtn->num > newNode->rbtn->num)
        {
            if (currNode->left == nullptr)
            {
                currNode->left = newNode;
                return;
            }
            currNode = currNode->left;
            placeNode(currNode, newNode);
        }
        else if (currNode->rbtn->num < newNode->rbtn->num)
        {
            if (currNode->right == nullptr)
            {
                currNode->right = newNode;
                return;
            }
            currNode = currNode->right;
            placeNode(currNode, newNode);
        }
    }
public:
    void preOrderTraversal(RBTNConn* root)
    {
        if (root == nullptr)
            return;
        cout << root->rbtn->num << endl;
        preOrderTraversal(root->left);
        preOrderTraversal(root->right);
    }
    bool findNode(RBTNConn* currNode, int val)
    {
        if (currNode == nullptr)
            return false;
  
        if (currNode->rbtn->num > val)
        {
            currNode = currNode->left;
            findNode(currNode, val);
        }
        else if (currNode->rbtn->num < val)
        {
            currNode = currNode->right;
            findNode(currNode, val);
        }
        else if (currNode->rbtn->num == val)
            return true;
    }
};

int main()
{
    RedBlackTree rbt;
    /*rbt.addNode(10);
    rbt.addNode(20);
    rbt.addNode(-10);
    rbt.addNode(15);
    rbt.addNode(17);
    rbt.addNode(40);
    rbt.addNode(50);
    rbt.addNode(60);*/

    rbt.addNode(3);
    rbt.addNode(1);
    rbt.addNode(0);
    rbt.addNode(2);
    rbt.addNode(5);
    rbt.addNode(4);
    rbt.addNode(6);

    //rbt.preOrderTraversal(root);
    cout << rbt.findNode(root, 0) << endl;
    cout << rbt.findNode(root, 1) << endl;
    cout << rbt.findNode(root, 3) << endl;
    cout << rbt.findNode(root, 2) << endl;
    cout << rbt.findNode(root, 5) << endl;
    cout << rbt.findNode(root, 4) << endl;
    cout << rbt.findNode(root, 6) << endl;
    cout << "-------------" << endl;
    cout << rbt.findNode(root, 9) << endl;
}

// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file
