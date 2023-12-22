const fs = require('fs')

let command = process.argv[2]
const args = process.argv
args.splice(0,3)

const todoItem = {
  id: 0,
  task: '',
  completed: false,
  tags: []
}

function printList(list, sort){
  if (sort && (sort === 'desc')) {
    list.reverse()
  }

  list.forEach(item => {
    completeMark = item.completed ? 'x' : ' '
    console.log(`${item.id}. [${completeMark}] ${item.task}`)
  });
}

if(!command) {
  console.log('>>> JS TODO <<<')
  console.log('$ node todo.js <command>')
  console.log('$ node todo.js list')
  console.log('$ node todo.js task <task_id>')
  console.log('$ node todo.js add <task_content>')
  console.log('$ node todo.js delete <task_id>')
  console.log('$ node todo.js complete <task_id>')
  console.log('$ node todo.js uncomplete <task_id>')
  console.log('$ node todo.js list:outstanding asc|desc')
  console.log('$ node todo.js list:completed asc|desc')
  console.log('$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>')
  console.log('$ node todo.js filter:<tag_name>')
}
else {
  const filename = 'data.json'
  const todoData = fs.readFileSync(filename)
  const todoList = JSON.parse(todoData)
  const lastId = todoList[todoList.length - 1].id
  let filter

  if (command.search(':') >= 0) {
    let splitted = command.split(':')
    command = splitted[0]
    filter = splitted[1]
  }

  switch (command) {
    case 'list':
      if(filter === 'outstanding'){
        console.log('Daftar Pekerjaan yang Belum Dikerjakan')
        const list = todoList.filter((item) => {
          return !item.completed
        })
        printList(list, args[0])
      }
      else if(filter === 'completed'){
        console.log('Daftar Pekerjaan yang Telah Dikerjakan')
        const list = todoList.filter((item) => {
          return item.completed
        })
        printList(list, args[0])
      }
      else {
        console.log('Daftar Pekerjaan')
        printList(todoList)
      }
      break;
    case 'task':
      let id = parseInt(args[0])
      if (id > todoList.length) {
        console.log(`Pekerjaan dengan id ${id} tidak dapat ditemukan.`)
      }
      else {
        printList([todoList[id - 1]])
      }
      break;
    case 'add':
      const task = args.join(' ')
      
      let item = {...todoItem}
      item.task = task
      item.id = lastId + 1

      todoList.push(item)
      console.log(`"${task}" telah ditambahkan.`)
      break;
    case 'delete':
      let delId = parseInt(args[0])

      if (delId > todoList.length) {
        console.log(`Pekerjaan dengan id ${id} tidak dapat ditemukan.`)
      }
      else {
        const deletedItem = todoList.splice(delId - 1, 1)[0]
        console.log(`"${deletedItem.task}" telah dihapus dari daftar.`)
        todoList = todoList.map((item, index) => {
          item.id = index + 1
          return item
        })
      }
      break;
    case 'complete':
      let compId = parseInt(args[0])

      if (compId > todoList.length) {
        console.log(`Pekerjaan dengan id ${id} tidak dapat ditemukan.`)
      }
      else {
        todoList[compId - 1].completed = true
        console.log(`"${todoList[compId - 1].task}" telah selesai.`)
      }
      break;
    case 'uncomplete':
      let uncompId = parseInt(args[0])

      if (uncompId > todoList.length) {
        console.log(`Pekerjaan dengan id ${id} tidak dapat ditemukan.`)
      }
      else {
        todoList[uncompId - 1].completed = false
        console.log(`"${todoList[uncompId - 1].task}" belum selesai.`)
      }
      break;
    case 'tag':
      let tagId = parseInt(args.shift())

      if (tagId > todoList.length) {
        console.log(`Pekerjaan dengan id ${id} tidak dapat ditemukan.`)
      }
      else {
        todoList[tagId - 1].tags = args

        console.log(`Tag "${args.join(',')}" telah ditambahkan`)
      }
      break;
    case 'filter':
      function finding(tag) {
        return tag === this.filter
      }

      function filtering(item) {
        let todo = item.tags.find(finding.bind({'filter': this.filter}))
        if(todo) return item
      }

      let filteredList = todoList.filter(filtering.bind({'filter': filter}))

      if (filteredList) printList(filteredList)
      else console.log('Tugas tidak ditemukan')

      break;
    default:
      console.log('Command tidak dapat ditemukan.')
      break;
  }

  fs.writeFileSync(filename, JSON.stringify(todoList))
}

