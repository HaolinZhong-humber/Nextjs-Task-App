export default async function ProductDetail({
    params,
  }: {
    params: Promise<{ productID: number }>
  }){
    const id = (await params).productID
    return (
        <div>
        <h1>Product Detail  : {id}</h1>
       
        </div>
    );
}