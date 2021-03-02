#!/bin/bash

astring=abcdefg
anum=$((1 + 1))

str="the astring is ${astring}"
echo "$str"

seq=(1 $anum 3 4 5)
echo ${seq[*]}

# math

# if else 
# if condition1
# then
#   comand1
# elif condition2
# then
#   comand2
# else
#   comandN
# fi

# case

# case $var in
#   condition1)
#     comand1
#     ;;
#   condition2)
#     comand2
#     ;;
#   *)
#     echo default
#     ;;
# esac

# 比较符
# -z var # 检查变量是否为空
# -d file # 检查file是否存在并是一个目录
# -e file # 检查file是否存在
# -f file # 检查file是否存在且是一个文件
# -s file # 检查file是否存在且非空

if [ -f './variable.sh' ]
then
  echo "file"
else
  echo "dir"
fi

# for
for index in 1 2 3 4 5
do
  echo $index
done

arrfor=(a b c d e)
for index in ${arrfor[*]};
do
  echo $index
done

for((i=0;i<=5;i++));
do
echo $i
done

# function

function custom_echo() {
  local prefix="input is"
  if [ -z $1 ];then
  echo "no input"
  else
    echo "$prefix $1"
  fi
  return 0
}

custom_echo
custom_echo abc
custom_echo abc
echo $?

# function special variable
# $# #传递到脚本或函数的个数
# $* 以一个单字符传显示所有向脚本传递的参数
# $$ 脚本运行的当前进程id号
# $! 后台运行的最后一个进程的id号
# $@ 与$*相同，但是使用时加引号
# $- 显示shell当前的选项，与set命令相同
# $? 显示最后命令的退出状态。0表示没有错误，其他表示有错误