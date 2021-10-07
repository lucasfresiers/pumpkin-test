import { TestBed } from '@angular/core/testing';
import { User } from '../models/user';

import { FilterService } from './filter.service';

describe('FilterService', () => {
  let filterService: FilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    filterService = TestBed.inject(FilterService);
  });

  it('should returns only users with more than the constant', () => {
    const income: number = 2500;

    const users: User[] = [
      {
        "id": 0,
        "isActive": true,
        "income": 2222,
        "picture": "http://placehold.it/32x32",
        "age": 39,
        "eyeColor": "green",
        "name": "Jana Rhodes",
        "gender": "female",
        "company": "DANCERITY",
        "email": "janarhodes@dancerity.com",
        "phone": "+1 (948) 583-3983",
        "address": "173 McKinley Avenue, Moscow, Texas, 5246",
        "about": "Nostrud consequat amet commodo velit Lorem do eu magna aute consequat velit adipisicing anim. Irure in non commodo velit excepteur non enim. Nisi officia incididunt minim aliquip eiusmod sunt ipsum duis nisi sint ipsum.\r\n",
        "favoriteFruit": "apple"
      },
      {
        "id": 1,
        "isActive": false,
        "income": 3856,
        "picture": "http://placehold.it/32x32",
        "age": 39,
        "eyeColor": "brown",
        "name": "Tammi Hobbs",
        "gender": "female",
        "company": "SATIANCE",
        "email": "tammihobbs@satiance.com",
        "phone": "+1 (872) 560-2051",
        "address": "214 Kosciusko Street, Wacissa, Marshall Islands, 8806",
        "about": "Duis id do ut ut do tempor ad ullamco deserunt anim. Dolor dolore esse qui cupidatat exercitation fugiat ex dolore nulla eu deserunt tempor ut. Dolor ex nulla anim exercitation laborum cupidatat. Laboris eu ea veniam ipsum amet id officia proident do commodo amet. Voluptate dolore mollit aliquip deserunt sit enim amet velit id anim veniam occaecat velit. Id magna culpa excepteur dolore nulla.\r\n",
        "favoriteFruit": "banana"
      },
    ]

    const test = filterService.filterByIncome(users,income);
    expect(1).toEqual(test.length);
  });
});
