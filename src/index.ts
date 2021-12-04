import app from './app'

const main = async () => {
  await app.listen(9000)
  console.log('Server on port 9000')
}

main()
