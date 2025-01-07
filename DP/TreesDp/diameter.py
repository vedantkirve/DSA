class Node:
    def __init__(self, val: int):
        self.val = val
        self.left = None
        self.right = None


#  diameter of a tree
max_height = float('-inf')
resp = [max_height]

def diameter(node, resp):
    if not node:
        return 0
    
    # Recursively calculate the height of the left and right subtrees.
    left = diameter(node.left, resp)
    right = diameter(node.right, resp)
    
    # Calculate the height for the current node.
    temp = 1 + max(left, right)
    
    # Calculate the diameter passing through this node.
    ans = max(temp, 1 + left + right)
    
    # Update the maximum diameter.
    resp[0] = max(resp[0], ans)

    return temp  # Return the height of the subtree rooted at this node.


diameter(node, resp)
print("max_height-->>",max_height)
    


