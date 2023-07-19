import os
import threading
import tkinter as tk
from tkinter import filedialog

# 创建GUI窗口
# root = tk.Tk()

# 创建目录选择对话框
# directory = filedialog.askdirectory()

# 打印选择的目录路径
# print("选择的目录路径：", directory)
#
# # 关闭GUI窗口
# root.destroy()
# # 打开目录
# os.chdir(directory)#指定svn目录
#
# # 执行命令
# os.system('chcp 65001')#统一编码
# os.system(' SetVirtualWorkSpace.bat')


def worker(num):
    """线程要执行的任务"""
    print(f"Worker {num} started")
    if num == 0:
        os.system(r' N:\PLATFORM\SERVER\x64\Debug\Bin\PlmEngineTest.exe')
    if num == 1:
        os.system(' N:/APPLICATION/IssueManagement/Client/IssueMgrClient.sln')
    if num == 2:
        os.system(' N:/APPLICATION/IssueManagement/Server/IssueMgrSrv.sln')
    if num == 3:
        os.system(r' N:\PLATFORM\SERVER\x64\Debug\Bin\EAPServiceTest.exe')
    if num == 4:
        os.system(r' N:\PLATFORM\SERVER\Application\webserver\aiosrvd\plm-all-in-one-srv\aiosrv.exe')
    # 执行一些任务
    print(f"Worker {num} finished")


threads = []
for i in range(5):
    t = threading.Thread(target=worker, args=(i,))
    threads.append(t)
    t.start()

for t in threads:
    t.join()