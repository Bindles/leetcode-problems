// 832. Flipping an Image
//image = [[1,1,0],[1,0,1],[0,0,0]]
//SOL
public class Solution {
    public int[][] FlipAndInvertImage(int[][] image) {
        for (int i = 0; i < image.Length; i++) {
            Array.Reverse(image[i]);
            for (int j = 0; j < image[i].Length; j++) {
                image[i][j] = 1 - image[i][j];
            }
        }
        return image;
    }
}
