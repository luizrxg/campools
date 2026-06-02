import type {
  User,
  Driver,
  Location,
  ActiveRide,
  RideHistoryItem,
  DriverRequest,
} from "@/types"

export const currentUser: User = {
  id: "u1",
  name: "Ana Souza",
  initials: "AS",
  university: "UFU",
  course: "Ciência da Computação",
  rating: 4.9,
  totalRides: 47,
  verified: true,
  avatarUrl: require("../assets/user.jpg"),
}

export const currentDriverUser: User = {
  id: "u2",
  name: "Carlos Mendes",
  initials: "CM",
  university: "UFU",
  course: "Engenharia Mecânica",
  rating: 4.8,
  totalRides: 120,
  verified: true,
  avatarUrl: require("../assets/driver.jpg"),
}

export const popularLocations: Location[] = [
  {
    id: "l1",
    name: "UFU - Campus Santa Monica",
    address: "Av. Joao Naves de Avila, 2121 - Santa Monica",
    type: "university",
  },
  {
    id: "l2",
    name: "UFU - Campus Umuarama",
    address: "Av. Amazonas, 4040 - Umuarama",
    type: "university",
  },
  {
    id: "l3",
    name: "UNITRI",
    address: "Av. Nicomedes Alves dos Santos, 4545 - Gavea",
    type: "university",
  },
  {
    id: "l4",
    name: "Terminal Central",
    address: "Av. Joao Pinheiro, 1000 - Centro",
    type: "transport",
  },
  {
    id: "l5",
    name: "Rodoviaria de Uberlandia",
    address: "Av. Joao Naves de Avila, 2325 - Santa Monica",
    type: "transport",
  },
  {
    id: "l6",
    name: "Uberlandia Shopping",
    address: "Av. Paulo Gracindo, 15 - Gavea",
    type: "neighborhood",
  },
  {
    id: "l7",
    name: "Praca Tubal Vilela",
    address: "Praca Tubal Vilela - Centro",
    type: "neighborhood",
  },
  {
    id: "l8",
    name: "Parque do Sabia",
    address: "Av. Anselmo Alves dos Santos, 600 - Santa Monica",
    type: "neighborhood",
  },
]

export const mockDriver: Driver = {
  id: "d1",
  name: "Rafael Lima",
  initials: "RL",
  university: "UFU",
  rating: 4.95,
  totalRides: 312,
  car: "Honda Civic",
  color: "Prata",
  plate: "ABC-1D23",
  verified: true,
  eta: 4,
  avatarUrl: require("../assets/driver.jpg"),
}

export const mockDriver2: Driver = {
  id: "d2",
  name: "Juliana Torres",
  initials: "JT",
  university: "UNITRI",
  rating: 4.87,
  totalRides: 198,
  car: "Volkswagen Polo",
  color: "Branco",
  plate: "XYZ-9A87",
  verified: true,
  eta: 7,
  avatarUrl: require("../assets/driver.jpg"),
}

export const mockActiveRide: ActiveRide = {
  id: "r1",
  pickup: popularLocations[3],
  destination: popularLocations[0],
  driver: mockDriver,
  coPassengers: [
    {
      id: "p1",
      name: "Pedro Costa",
      initials: "PC",
      pickup: "Terminal Central",
      destination: "UFU - Campus Santa Monica",
      status: "in-car",
      avatarUrl: require("../assets/user.jpg"),
    },
    {
      id: "p2",
      name: "Larissa Nunes",
      initials: "LN",
      pickup: "Uberlandia Shopping",
      destination: "UFU - Campus Umuarama",
      status: "waiting",
      avatarUrl: require("../assets/user.jpg"),
    },
  ],
  status: "driver-coming",
  estimatedTime: 12,
  price: 6.5,
  seats: { total: 4, taken: 3 },
}

export const rideHistory: RideHistoryItem[] = [
  {
    id: "h1",
    date: "2026-05-29",
    dayLabel: "Ontem",
    from: "Terminal Central",
    to: "UFU - Campus Santa Monica",
    driver: "Rafael Lima",
    price: 6.5,
    rating: 5,
    passengers: 3,
  },
  {
    id: "h2",
    date: "2026-05-28",
    dayLabel: "Qua, 28 Mai",
    from: "UFU - Campus Santa Monica",
    to: "Uberlandia Shopping",
    driver: "Juliana Torres",
    price: 5.0,
    rating: 5,
    passengers: 2,
  },
  {
    id: "h3",
    date: "2026-05-27",
    dayLabel: "Ter, 27 Mai",
    from: "Praca Tubal Vilela",
    to: "UFU - Campus Santa Monica",
    driver: "Marcos Andrade",
    price: 7.0,
    rating: 4,
    passengers: 4,
  },
  {
    id: "h4",
    date: "2026-05-26",
    dayLabel: "Seg, 26 Mai",
    from: "Terminal Central",
    to: "UFU - Campus Umuarama",
    driver: "Carla Ferreira",
    price: 5.5,
    rating: 5,
    passengers: 2,
  },
  {
    id: "h5",
    date: "2026-05-23",
    dayLabel: "Sex, 23 Mai",
    from: "Uberlandia Shopping",
    to: "UFU - Campus Santa Monica",
    driver: "Rafael Lima",
    price: 8.0,
    rating: 5,
    passengers: 3,
  },
]

export const driverPendingRequests: DriverRequest[] = [
  {
    id: "dr1",
    passenger: {
      id: "p3",
      name: "Ana Souza",
      initials: "AS",
      pickup: "Terminal Central",
      destination: "UFU - Campus Santa Monica",
      status: "waiting",
      avatarUrl: require("../assets/user.jpg"),
    },
    pickup: popularLocations[3],
    destination: popularLocations[0],
    price: 6.5,
    distance: "1,2 km de você",
  },
  {
    id: "dr2",
    passenger: {
      id: "p4",
      name: "Beatriz Alves",
      initials: "BA",
      pickup: "Uberlandia Shopping",
      destination: "UFU - Campus Umuarama",
      status: "waiting",
      avatarUrl: require("../assets/user.jpg"),
    },
    pickup: popularLocations[5],
    destination: popularLocations[1],
    price: 5.0,
    distance: "0,8 km de você",
  },
]

export const driverActivePassengers = [
  {
    id: "p5",
    name: "Pedro Costa",
    initials: "PC",
    pickup: "Terminal Central",
    destination: "UFU - Campus Santa Monica",
    status: "in-car" as const,
    avatarUrl: require("../assets/user.jpg"),
  },
  {
    id: "p6",
    name: "Ana Souza",
    initials: "AS",
    pickup: "Terminal Central",
    destination: "UFU - Campus Umuarama",
    status: "waiting" as const,
    avatarUrl: require("../assets/user.jpg"),
  },
]
