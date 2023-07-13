rem 映射当前路径[%~sdp0]为X:
echo off
set MY_WORK_PATH=%~sdp0
subst X: %MY_WORK_PATH:~0,-1% 
subst