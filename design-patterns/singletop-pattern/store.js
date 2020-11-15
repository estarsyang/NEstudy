function Store() {
  console.log(this);
  if(Store.install) {
    return Store.install
  }
  this.state = {}
  Store.install = this
}

const s1 = new Store()
const s2 = new Store()
s1.state.a = 1
console.log(s2);