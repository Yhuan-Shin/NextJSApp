import { Button } from "@/components/ui/button"

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-black text-white">
        <div className="text-lg font-bold">MyApp</div>
        <div className="space-x-4">
            <Button  className="text-white">Inventory</Button>
            <Button  className="text-white">Profile</Button>
            <Button  className="text-white">Settings</Button>
        </div>
        </nav>
    )
}
