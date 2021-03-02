#!/bin/bash

# 连续 cd: 输入任意目录名，可以cd进入该目录，并且显示该目录下所有内容，再次输入目录名，重复以上步骤，知道输入为空，退出该程序


function readDir() {
  echo -n '请输入你想进入的目录'
  read dir
  if [ ${dir} === '']; then
  exit
  elif [ -d ${dir} ]; then
  cd ${dir}
  ls
  readDir
  else
  echo '当前目录不存在'
  fi
}
readDir