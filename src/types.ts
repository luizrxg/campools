export type AppScreen =
  | "home"
  | "request"
  | "finding"
  | "active-ride"
  | "driver-home"
  | "driver-active"
  | "profile"
  | "history"

export type UserMode = "passenger" | "driver"

export interface User {
  id: string
  name: string
  initials: string
  university: string
  course: string
  rating: number
  totalRides: number
  verified: boolean
  avatarUrl?: any
}

export interface Driver {
  id: string
  name: string
  initials: string
  university: string
  rating: number
  totalRides: number
  car: string
  color: string
  plate: string
  verified: boolean
  eta: number
  avatarUrl?: any
}

export interface Passenger {
  id: string
  name: string
  initials: string
  pickup: string
  destination: string
  status: "waiting" | "in-car" | "dropped-off"
}

export interface Location {
  id: string
  name: string
  address: string
  type: "university" | "transport" | "neighborhood" | "popular"
}

export interface ActiveRide {
  id: string
  pickup: Location
  destination: Location
  driver: Driver
  coPassengers: Passenger[]
  status: "driver-coming" | "in-progress" | "completed"
  estimatedTime: number
  price: number
  seats: { total: number; taken: number }
}

export interface RideHistoryItem {
  id: string
  date: string
  dayLabel: string
  from: string
  to: string
  driver: string
  price: number
  rating: number
  passengers: number
}

export interface DriverRequest {
  id: string
  passenger: Passenger
  pickup: Location
  destination: Location
  price: number
  distance: string
}
