import app from './app'

const main = async () => {
  await app.listen(process.env.PORT||4000)
  console.log('Server on port 9000')
}

main()
