export default async function readHTML (path) {

    const result = await fetch(path)
    console.log(await result.text())

}