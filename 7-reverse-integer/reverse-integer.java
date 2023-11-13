class Solution {

        
    public int reverse(int x) {    
		int num=x;
		long reverse_num=0;
        while (num!=0){
			int lastdigit = num%10;
			reverse_num=reverse_num*10+lastdigit;
			num=num/10;
            if(reverse_num > Integer.MAX_VALUE || reverse_num < Integer.MIN_VALUE){
            return 0;
            }
        }
		return  (int)reverse_num;

    }
    
}