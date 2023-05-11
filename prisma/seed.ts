// /* eslint-disable no-console */
// import type { Prisma } from '@prisma/client';
// import { LocationType } from '@prisma/client'
// import { prisma } from '@/utils/db'

// const contractData: Prisma.ContractsCreateInput = {
//    name: 'Contract 1',
// }
// const locationConfigData: Prisma.LocationConfigsCreateInput = {
//    name: 'Location Config 1',
//    locationId: 1
// }
// const locationData: Prisma.LocationsUncheckedCreateInput = {
//    name: 'Location 1',
//    latitude: 1,
//    longitude: 1,
//    contractId: 1,
//    locationConfigsId: 1,
//    locationType: LocationType.NEIGHBORHOOD
// }

// const functionalUnitData = {
//    ciu: '5321a',
//    access_code: '123',
//    locationId: 1,
// }

// async function main() {
//    console.log(`Start seeding ...`)

//    await prisma.contracts.deleteMany()
//    console.log('Deleted records in contracts table')

//    await prisma.locationConfigs.deleteMany()
//    console.log('Deleted records in locationConfigs table')

//    await prisma.locations.deleteMany()
//    console.log('Deleted records in locations table')

//    await prisma.functionalUnits.deleteMany()
//    console.log('Deleted records in functionalUnits table')

//    await prisma.$queryRaw`ALTER TABLE Contracts AUTO_INCREMENT = 1`
//    console.log('reset Contracts auto increment to 1')

//    await prisma.$queryRaw`ALTER TABLE LocationConfigs AUTO_INCREMENT = 1`
//    console.log('reset LocationConfigs auto increment to 1')

//    await prisma.$queryRaw`ALTER TABLE Locations AUTO_INCREMENT = 1`
//    console.log('reset Locations auto increment to 1')

//    await prisma.$queryRaw`ALTER TABLE FunctionalUnits AUTO_INCREMENT = 1`
//    console.log('reset FunctionalUnits auto increment to 1')

//    const contract = await prisma.contracts.create({ data: contractData })
//    console.log(`Created user with id: ${contract.id}`)

//    const locationConfig = await prisma.locationConfigs.create({ data: locationConfigData })
//    console.log(`Created user with id: ${locationConfig.id}`)

//    const location = await prisma.locations.create({ data: locationData })
//    console.log(`Created user with id: ${location.id}`)

//    const functionalUnit = await prisma.functionalUnits.create({ data: functionalUnitData })
//    console.log(`Created user with id: ${functionalUnit.id}`)


//    console.log(`Seeding finished.`)
// }

// main()
//    .then(async () => {
//       await prisma.$disconnect()
//    })
//    .catch(async (e) => {
//       console.error(e)
//       await prisma.$disconnect()
//       process.exit(1)
//    })