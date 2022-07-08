import customer from '@images/customer.jpg'

interface emptyInfoInterface {
    [key: string]: {
        spanTop: string;
        spanBottom: string;
        img?: string;
        buttonName?: string;
    }
}

export const emptyInfo: emptyInfoInterface = {
    'Корзина пустая': {
        spanTop: 'Вероятнее всего, вы еще не заказывали пиццу.',
        spanBottom: 'Для того, чтобы заказать пиццу, перейдите на главную страницу.',
        img: customer,
        buttonName: 'Вернуться назад'
    },
    'Произошла ошибка': {
        spanTop: 'К сожалению, не удалось получить пиццы.',
        spanBottom: 'Попробуйте повторить попытку позже.',
        buttonName: 'Попробовать снова'
    },
    'Ничего не найдено': {
        spanTop: 'К сожалению, данная страница отсутствует в нашем интернет магазине.',
        spanBottom: 'Попробуйте вернуться на главную.',
        buttonName: 'Вернуться на главную'
    },
    'Таких пицц у нас нет': {
        spanTop: 'Пока в нашем ассортименте отсутствуют такие пиццы.',
        spanBottom: 'Возможно, вам стоит поискать другие пиццы.',
    }
}