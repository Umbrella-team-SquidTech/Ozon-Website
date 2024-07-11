
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import {  Calendar } from "@/components/ui/calendar"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export function CreateEventForm() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-background rounded-lg shadow-lg p-8 sm:p-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Create Event</h1>
          <p className="text-muted-foreground">Fill out the form to create a new event.</p>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Event Name</Label>
              <Input id="name" placeholder="Enter event name" />
            </div>
            <div>
              <Label htmlFor="description">Event Description</Label>
              <Textarea id="description" placeholder="Enter event description" />
            </div>
            <div>
              <Label htmlFor="address">Event Address</Label>
              <Input id="address" placeholder="Enter event address" />
            </div>
            <div>
              <Label htmlFor="start-date">Event Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start font-normal">
                    Pick a date
                    <div className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label htmlFor="images">Images</Label>
              <Input id="images" type="file" multiple />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="type">Event Type</Label>
              <Select>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="conference">Conference</SelectItem>
                  <SelectItem value="meetup">Meetup</SelectItem>
                  <SelectItem value="workshop">Workshop</SelectItem>
                  <SelectItem value="party">Party</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="attendance-limit">Attendance Limit</Label>
              <Input id="attendance-limit" type="number" placeholder="Enter limit" />
            </div>
            <div>
              <Label htmlFor="green-pass">Green Pass Requirement</Label>
              <Input id="green-pass" placeholder="Enter green pass requirement" />
            </div>
            <div>
              <Label htmlFor="map">Map</Label>
              <div className="h-64 bg-muted rounded-lg">
                <p className="text-muted-foreground p-4">Precisez la localisation</p>
              </div>
            </div>
          </div>
        </form>
        <div className="mt-8 flex justify-end">
          <Button type="submit">Save Event</Button>
        </div>
      </div>
    </div>
  )
}
