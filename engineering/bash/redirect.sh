#!/bin/bash

# 重定向

#  > file 将内容加到 file 中,覆盖文件
#  >> file 将内容追加到 file 中

# 交互式程序
# echo
# echo 'xxx' 打印并换行
# echo  -n'xxx' 打印不换行
# read
# read var 读取输入，存入变量 var
# read -n 1 var 读取输入的第一个字符，存入变量var


echo -n "what's your first name?"
read firstName;
echo -n "what's your last name?"
read lastName;
echo "$firstName $lastName"