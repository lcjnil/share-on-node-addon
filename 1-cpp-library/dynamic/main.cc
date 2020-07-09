#include <iostream>
#include <dlfcn.h>

using namespace std;

typedef int (*add_t)(int a, int b);

int main() {
    void *handle = dlopen("add.so", RTLD_LAZY);
    add_t fn = (add_t) dlsym(handle, "add");

    cout << fn(1, 2) << endl;
}