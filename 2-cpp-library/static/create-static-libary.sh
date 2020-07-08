g++ -c ../lib/add.cc # will generate object code

ar rvs add.a add.o # will generate static library

g++ main.cc add.a -o main