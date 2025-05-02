'use client';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { db } from "@/app/firebase";
import { collection, addDoc } from "firebase/firestore";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

async function addData(itemName: string, description: string, quantity: number) {
    try {
        const docRef = await addDoc(collection(db, "items"), {
            itemName: itemName,
            description: description,
            quantity: quantity,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    
}
  
export default function AddModal() {
   const[itemName, setItemName] = useState('');
    const[description, setDescription] = useState('');
    const[quantity, setQuantity] = useState(0);

    const storeItem = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await addData(itemName, description, quantity);
            setItemName('');
            setDescription('');
            setQuantity(0);
            alert('Item added successfully!');
        } catch (error) {
            alert('Error adding item!');
        }

    };

    return (
        <Dialog>
            <DialogTrigger className="bg-blue-500 text-white px-4 py-2 rounded m-4">
                Add Item
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Add Item</DialogTitle>
                <DialogDescription >
                    <form onSubmit={storeItem} className="flex flex-col gap-4">
                        <Input type="text" placeholder="Item Name"
                         id="itemName"
                         value={itemName}
                         onChange={(e) => setItemName(e.target.value)}
                         />
                        <Input type="text" placeholder="Description" 
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        />
                        <Input type="number" placeholder="Quantity"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                        <button className="bg-green-500 text-white px-4 py-2 rounded mt-4" type="submit">
                            Add Item
                        </button>
                    </form>
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );

}