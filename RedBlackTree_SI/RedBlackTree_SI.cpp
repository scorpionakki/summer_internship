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
    struct RBTNConn* parent = nullptr;
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
            newNode->rbtn->col = 'B';
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
                newNode->parent = currNode;
                fixPositions(currNode, newNode);
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
                newNode->parent = currNode;
                fixPositions(currNode, newNode);
                return;
            }
            currNode = currNode->right;
            placeNode(currNode, newNode);
        }
    }

    void fixPositions(RBTNConn* currNode, RBTNConn* newNode)
    {
        if (currNode->rbtn->num > newNode->rbtn->num && currNode->left->rbtn->num != newNode->rbtn->num)
        {
            currNode = currNode->left;
            fixPositions(currNode, newNode);
        }
        else if (currNode->rbtn->num < newNode->rbtn->num && currNode->right->rbtn->num != newNode->rbtn->num)
        {
            currNode = currNode->right;
            fixPositions(currNode, newNode);
        }

        if (currNode->right == newNode)
        {
            if (currNode->rbtn->col == 'R')
            {
                //Red Red pair need to fix.
                if (currNode->parent->left == currNode)
                {
                    if (currNode->parent->right != nullptr)
                    {
                        if (currNode->parent->right->rbtn->col == 'R')
                        {
                            //Sibling also has color red - need to recolor
                            currNode->rbtn->col = 'B';
                            currNode->parent->right->rbtn->col = 'B';
                            if (currNode->parent != root)
                            {
                                currNode->parent->rbtn->col = 'R';
                            }
                        }
                        else
                        {
                            //Sibling has color black - need to do rotations
                            RBTNConn* sibling = currNode->parent->right;

                            //Left rotation (child and parent)
                            RBTNConn* temp = currNode;
                            currNode->parent->left = newNode;
                            newNode->parent = currNode->parent;
                            newNode->left = temp;
                            temp->parent = newNode;
                            currNode->right = nullptr;

                            //Right rotation (child, parent and grandparent)
                            RBTNConn* tempParent = newNode->parent;
                            newNode->right = tempParent;
                            newNode->parent = newNode->parent->parent;
                            tempParent->parent = newNode;
                            tempParent->right = sibling;
                            sibling->parent = tempParent;
                            newNode->parent->left = nullptr;


                            newNode->right->rbtn->col = 'R';
                            newNode->rbtn->col = 'B';

                        }
                    }
                    else
                    {
                        //No sibling exists - need to do rotations
                        //parent(Black) -> left(Red) -> right(Red) LR  

                        //Left rotation (child and parent)
                        RBTNConn* temp = new RBTNConn;
                        temp = currNode;
                        currNode->parent->left = newNode;
                        newNode->parent = temp->parent;
                        newNode->left = temp;
                        temp->parent = newNode;
                        temp->right = nullptr;

                        //Right rotation (child, parent and grandparent)
                        RBTNConn* tempParent = newNode->parent;
                        newNode->right = tempParent;
                        tempParent->parent->right = newNode;
                        newNode->parent = tempParent->parent;
                        tempParent->parent = newNode;
                        tempParent->left = nullptr;

                        newNode->right->rbtn->col = 'R';
                        newNode->rbtn->col = 'B';

                       
                    }
                }
                else if(currNode->parent->right == currNode)
                {
                    if (currNode->parent->left != nullptr)
                    {
                        if (currNode->parent->left->rbtn->col == 'R')
                        {
                            //Sibling also has color red - need to recolor
                            currNode->rbtn->col = 'B';
                            currNode->parent->left->rbtn->col = 'B';
                            if (currNode->parent != root)
                            {
                                currNode->parent->rbtn->col = 'R';
                            }
                        }
                        else
                        {
                            //Sibling has color black - need to do rotations
                            RBTNConn* temp = currNode->parent;
                            currNode->parent = currNode->parent->parent;
                            currNode->left = temp;
                            temp->parent = currNode;
                            temp->right = nullptr;


                            currNode->rbtn->col = 'B';
                            currNode->left->rbtn->col = 'R';

                        }
                    }
                    else
                    {
                        //No sibling exists - need to do rotations
                        //parent(black) -> right(Red) -> right(Red) RR
                        RBTNConn* temp = currNode->parent;
                        currNode->parent = currNode->parent->parent;
                        currNode->parent->right = currNode;
                        currNode->left = temp;
                        temp->parent = currNode;
                        temp->right = nullptr;


                        currNode->rbtn->col = 'B';
                        currNode->left->rbtn->col = 'R';

                    }
                }
            }
        }
        else if (currNode->left == newNode)
        {
            if (currNode->rbtn->col == 'R')
            {
                //Red Red pair need to fix.
                if (currNode->parent->left == currNode)
                {
                    if (currNode->parent->right != nullptr)
                    {
                        if (currNode->parent->right->rbtn->col == 'R')
                        {
                            //Sibling also has color red - need to recolor
                            currNode->rbtn->col = 'B';
                            currNode->parent->right->rbtn->col = 'B';
                        }
                        else
                        {
                            //Sibling has color black - need to do rotations
                            RBTNConn* temp = currNode->parent;
                            currNode->parent = currNode->parent->parent;
                            currNode->right = temp;
                            temp->left = nullptr;
                            temp->parent = currNode;

                            currNode->rbtn->col = 'B';
                            currNode->right->rbtn->col = 'R';

                            
                        }
                    }
                    else
                    {
                        //No sibling exists - need to do rotations
                        //parent(Black) -> left(Red) -> left(Red) LL  
                        RBTNConn* temp = currNode->parent;
                        currNode->parent = currNode->parent->parent;
                        currNode->right = temp;
                        temp->left = nullptr;
                        temp->parent = currNode;

                        currNode->rbtn->col = 'B';
                        currNode->right->rbtn->col = 'R';

                        
                    }
                }
                else if (currNode->parent->right == currNode)
                {
                    if (currNode->parent->left != nullptr)
                    {
                        if (currNode->parent->left->rbtn->col == 'R')
                        {
                            //Sibling also has color red - need to recolor
                            currNode->rbtn->col = 'B';
                            currNode->parent->left->rbtn->col = 'B';
                        }
                        else
                        {
                            //Sibling has color black - need to do rotations
                            //Right rotation(child and parent)
                            newNode->parent = currNode->parent;
                            newNode->right = currNode;
                            currNode->parent = newNode;
                            currNode->left = nullptr;

                            //Left rotation(parent, child and grandparent)
                            RBTNConn* temp = newNode->parent;
                            newNode->parent = newNode->parent->parent;
                            newNode->left = temp;
                            temp->parent = newNode;
                            temp->right = nullptr;

                            newNode->rbtn->col = 'B';
                            newNode->left->rbtn->col = 'R';

                           
                        }
                    }
                    else
                    {
                        //No sibling exists - need to do rotations
                        //parent(black) -> left(Red) -> right(Red) LR
                        
                       //Right rotation(child and parent)
                        newNode->parent = currNode->parent;
                        newNode->right = currNode;
                        currNode->parent = newNode;
                        currNode->left = nullptr;

                        //Left rotation(parent, child and grandparent)
                        RBTNConn* temp = newNode->parent;
                        newNode->parent = newNode->parent->parent;
                        newNode->left = temp;
                        temp->parent = newNode;
                        temp->right = nullptr;

                        newNode->rbtn->col = 'B';
                        newNode->left->rbtn->col = 'R';

                       
                    }
                }
            }
        }
    }

public:
    void preOrderTraversal(RBTNConn* root)
    {
        if (root == nullptr)
            return;
        cout << root->rbtn->num <<" : "<< root->rbtn->col << endl;
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
    rbt.addNode(10);
    rbt.addNode(20);
    rbt.addNode(-10);
    rbt.addNode(15);
    rbt.addNode(17);
    rbt.addNode(40);
   rbt.addNode(50);
   rbt.addNode(60);

    rbt.preOrderTraversal(root);
    /*cout << rbt.findNode(root, 0) << endl;*/
 
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
