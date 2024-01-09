#!/usr/bin/python3
def new_in_list(my_list, idx, element):
   if idx < 0 or idx > len(my_list)-1:
      copy= my_list.copy()
      return my_list.copy()
   else:
      copy[idx]=element
      return copy
   
def no_c(my_string):
   new_string= my_string.translate({ord(i): None for i in'cC'})
   print(new_string)
