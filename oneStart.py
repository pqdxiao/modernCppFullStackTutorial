import os
import threading
import tkinter as tk
from tkinter import filedialog


def worker(num):
    """线程要执行的任务"""
    if num == 0:
        os.popen(r' N:\PLATFORM\SERVER\x64\Debug\Bin\PlmEngineTest.exe')
    if num == 1:
        os.popen(r' N:\PLATFORM\SERVER\x64\Debug\Bin\EAPServiceTest.exe')


threads = []
for i in range(2):
    t = threading.Thread(target=worker, args=(i,))
    threads.append(t)
    t.start()

for t in threads:
    t.join()