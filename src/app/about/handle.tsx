"use server";
interface DataProps{
    name: string;
    password: string;
}
export default async function Handle( data: DataProps ){
    const getdata:DataProps = data;
    console.log(getdata);
}

/*
export default async function(data){
    console.log(data)
}
*/