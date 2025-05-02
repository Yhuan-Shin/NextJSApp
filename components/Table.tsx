import { Button } from "@/components/ui/button"
import AddModal from "./crud/AddModal";
export default function Table() {

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
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="px-4 py-2">1</td>
                        <td className="px-4 py-2">Item 1</td>
                        <td className="px-4 py-2">Description of Item 1</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2 flex space-x-2">
                            <Button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</Button>
                            <Button className="bg-red-500 text-white px-4 py-2 rounded ml-2">Delete</Button>
                        </td>
                    </tr>
                   

                </tbody>

            </table>
        </div>
    );
}