const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (fullOrder) => {
    const entregadora = fullOrder.order.delivery.deliveryPerson;
    const cliente = fullOrder.name;
    const tel = fullOrder.phoneNumber;
    const rua = fullOrder.address.street;
    const numero = fullOrder.address.number;
    const apartamento = fullOrder.address.apartment;

    return `Olá, ${entregadora}, entrega para: ${cliente}, Telefone ${tel}, ${rua}, Número: ${numero}, AP: ${apartamento} ` 
  }
  
  console.log(customerInfo(order));
  

  const orderModifier = (fullOrder) => {
    order.name = 'Luiz SIlva';
    order.payment.total = 50;
    const cliente = fullOrder.name;
    const pedido = Object.keys(fullOrder.order.pizza).join(', ');
    const bebida = fullOrder.order.drinks.coke.type;
    const pagamento = fullOrder.payment.total;

    return `Olá, ${cliente}, o valor total do seu pedido de ${pedido} e ${bebida} é R$${pagamento},00.`

    
  }
  
  console.log(orderModifier(order));
  