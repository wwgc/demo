   'use strict';
   
    //二分查找法 数组必须是有序的
  const binarySearch = function ( arr,findval,leftIndex,rightIndex ){
        //找到中间的值
        let midIndex = (leftIndex+rightIndex)>>1;
        let midval=arr[midIndex];
        
        //防止无穷递归
        if( leftIndex > rightIndex ){
            //说明找不到
            return -1;
        }
        //进行查找
        if( midval > findval ){
            //在左边找
            return binarySearch(arr,findval,leftIndex,midIndex-1);
        }else if(midval < findval){
            //说明往右边找
            return binarySearch(arr,findval,midIndex+1,rightIndex);
        }else{
            //找到了 输出或者返回
            return midIndex;
        }
    }

module.exports = binarySearch;
