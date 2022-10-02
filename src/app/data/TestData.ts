import {Category} from "../model/Category";
import {Priority} from "../model/Priority";
import {Task} from "../model/Task";

export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Работа'},
    {id: 2, title: 'Семья'},
    {id: 3, title: 'Учеба'},
    {id: 4, title: 'Отдых'},
    {id: 5, title: 'Спорт'},
    {id: 6, title: 'Еда'},
    {id: 7, title: 'Финансы'},
    {id: 8, title: 'Гаджеты'},
    {id: 9, title: 'Здоровье'},
    {id: 10, title: 'Автомобиль'},
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'Низкий',color: '#e5e5e5'},
    {id: 2, title: 'Средний',color: '#85d1b2'},
    {id: 3, title: 'Высокий',color: '#f1828d'},
    {id: 4, title: 'Очень срочно',color: '#f1128d'},
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Залить бензин полный бак',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.priorities[9],
      date: new Date('2022-10-02')
    },

    {
      id: 2,
      title: 'Передать отчеты начальнику управления',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.priorities[0],
      date: new Date('2022-10-03')
    },

    {
      id: 2,
      title: 'Передать отчеты начальнику управления',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.priorities[0],
      date: new Date('2022-10-03')
    },

    {
      id: 3,
      title: 'Убраться у себя в комнате,',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.priorities[1]
    },

    {
      id: 4,
      title: 'Сходить в парк с семьей',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.priorities[1],
      date: new Date('2022-10-04')
    },

    {
      id: 5,
      title: 'Найти и выучить учебник по квантовой физике',
      completed: false,
      category: TestData.priorities[2]
    },

    {
      id: 6,
      title: 'Сходить на семинар по программированию',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.priorities[2],
      date: new Date('2022-10-07')
    },

    {
      id: 7,
      title: 'Найти билеты в Турцию',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.priorities[3]
    },

    {
      id: 8,
      title: 'Приготовить ужин для всей семьи ',
      completed: false,
      category: TestData.priorities[5]
    },

    {
      id: 9,
      title: 'Подтянуться 10 раз',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.priorities[4],
      date: new Date('2019-03-12')
    },

    {
      id: 10,
      title: 'Пробежать 100 м',
      priority: TestData.priorities[0],
      completed: true,
      category: TestData.priorities[4]
    },

    {
      id: 11,
      title: 'Организовать детский праздник',
      completed: false
    },

    {
      id: 12,
      title: 'Сходить на лекцию "Как научиться программировать на Java"',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.priorities[2]
    },

    {
      id: 13,
      title: 'Купить продукты на неделю',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.priorities[5],
      date: new Date('2019-03-14')
    },

    {
      id: 14,
      title: 'Провести собрание по поводу всех проектов',
      completed: true,
      category: TestData.priorities[0],
    },

    {
      id: 15,
      title: 'Сдать экзамен по Java',
      priority: TestData.priorities[2],
      completed: true
    },

    {
      id: 16,
      title: 'Положить 100 000 EUR в банк на депозит',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.priorities[6]
    },

    {
      id: 17,
      title: 'Попросить аванс на работе',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[6]
    },

    {
      id: 18,
      title: 'Cдать анализы',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[8],
      date: new Date('2022-10-11')
    },

    {
      id: 19,
      title: 'Сравнить айпад с самсунгом',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[7],
      date: new Date('2022-10-11')
    },

    {
      id: 20,
      title: 'Футбол с сотрудниками',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2022-12-15')
    }

  ];
}
