#!/bin/bash
# string
astring=abcdefg
bstring="what's the day today"

# number
num1=$[1+1]
num2=$((1+1))

# array
arr1=(what\'s the day today)
arr2=(1 2 3 4 5)
arr3[1]=1

echo $astring
echo $bstring
echo $num1
echo $num2
echo ${arr1[*]}
echo ${arr2[@]}
echo ${arr3[1]}



