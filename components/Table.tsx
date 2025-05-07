'use client';
import { Button } from "@/components/ui/button"
import AddModal from "./modal/AddModal";
import { db } from "@/app/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect,useState } from "react";

async function fetchData() {
    const data = await getDocs(collection(db, "items"));
    const items = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return items;
}


export default function Table() {
    interface Item {
        id: string;
        itemName: string;
        description: string;
        quantity: number;
    }
    
    const [itemData, setItemData] = useState<Item[]>([]);
    useEffect(() => {
        const fetchItems = async () => {
            const result = await fetchData();
            setItemData(result);
        }
        fetchItems();
    }
    , []);

    
    return (
        <div>

            <AddModal/>
            <table className="border border-gray-200 w-100 m-auto rounded-kg shadow-md mt-4">
                
                <thead>
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Item</th>
                        <th className="px-4 py-2">Description</th>
                        <th className="px-4 py-2">Quantity</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-100">
                    {itemData.map((data) => (
                        <tr key={data.id} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="px-4 py-2">{data.id}</td>
                            <td className="px-4 py-2">{data.itemName}</td>
                            <td className="px-4 py-2">{data.description}</td>
                            <td className="px-4 py-2">{data.quantity}</td>
                            <td className="px-4 py-2 flex gap-2">
                                <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                                <Button variant="destructive" size="sm">Delete</Button>
                            </td>
                        </tr>
                    ))}
                   

                </tbody>

            </table>
        </div>
    );
}