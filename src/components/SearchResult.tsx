
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Link } from "react-router-dom";

const SearchResult = () => {
  return (
    <div>
               <div className="absolute top-16  right-[13%] z-10 w-[20rem] rounded-3xl border border-muted bg-background shadow-lg">
        <div className="max-h-64 overflow-auto">
          <div className="space-y-1 p-2">
            <div className="text-sm font-medium text-muted-foreground">Events</div>
            <Link  className="block rounded-md px-3 py-2 text-sm hover:bg-muted" prefetch={false}>
              Product Launch Party
            </Link>
            <Link  className="block rounded-md px-3 py-2 text-sm hover:bg-muted" prefetch={false}>
              Annual Company Picnic
            </Link>
            <Link  className="block rounded-md px-3 py-2 text-sm hover:bg-muted" prefetch={false}>
              Developer Meetup
            </Link>
          </div>
          <div className="space-y-1 border-t border-muted p-2">
            <div className="text-sm font-medium text-muted-foreground">Users</div>
            <Link  className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted" prefetch={false}>
              <Avatar className="mr-2 h-6 w-6">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              John Doe
            </Link>
            <Link  className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted" prefetch={false}>
              <Avatar className="mr-2 h-6 w-6">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              Jane Smith
            </Link>
            <Link  className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted" prefetch={false}>
              <Avatar className="mr-2 h-6 w-6">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
              Michael Davis
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResult