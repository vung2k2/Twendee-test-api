import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

@Injectable()
export class RandomUserService {
  generateRandomUser() {
    return {
      name: faker.name.fullName(),
      gender: faker.person.sex(),
      email: faker.internet.email(),
      address: {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipcode: faker.location.zipCode(),
        country: faker.location.country(),
      },
      phone: faker.phone.number(),
      avatar: faker.image.avatar(),
      nat: faker.location.countryCode(),
    };
  }

  generateRandomUsers(count: number) {
    return Array.from({ length: count }, () => this.generateRandomUser());
  }

  filterUser(user, fields: string[]) {
    const filteredUser = {};
    for (const field of fields) {
      if (user[field]) {
        filteredUser[field] = user[field];
      }
    }
    return filteredUser;
  }

  filterUsers(users, gender, nat, inc, exc) {
    if (gender) {
      users = users.map((user) =>
        user.gender === gender ? user : { ...user, gender },
      );
    }

    if (nat) {
      users = users.map((user) => (user.nat === nat ? user : { ...user, nat }));
    }

    if (inc) {
      const fields = inc.split(',');
      users = users.map((user) => this.filterUser(user, fields));
    }

    if (exc) {
      const fields = exc.split(',');
      users = users.map((user) => {
        fields.forEach((field) => delete user[field]);
        return user;
      });
    }

    return users;
  }

  convertToFormat(user, format) {
    if (format === 'xml') {
    } else if (format === 'csv') {
    }
    return user;
  }
}
