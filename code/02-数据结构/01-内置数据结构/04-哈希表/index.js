class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }
  hash(key) {
    // 哈希函数
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    // 取模防止跳出表；
    return total % this.size;
  }
  // 设置
  set(key, val) {
    const index = this.hash(key);
    this.table[index] = val;
  }
  // 获取
  get(key) {
    return this.table[this.hash(key)];
  }
  // 删除
  remove(key) {
    this.table[this.hash(key)] = undefined;
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}
// 测试
const table = new HashTable(6);
table.set('guest1', 10);
table.set('guest2', 20);
table.display();
console.log(table.get('guest2'));
table.remove('guest2');
table.display()
