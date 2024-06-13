export const formatPhoneNumber = (value: string) => {
    // Eliminar todo lo que no sea dígito
    const  numbers = value.replace(/\D/g, '');

    // Formatear los primeros 8 dígitos como 00-00-00-00
    let formattedNumber = '';
    for (let i = 0; i < numbers.length && i < 8; i++) {
      if (i > 0 && i % 2 === 0) {
        formattedNumber += '-';
      }
      formattedNumber += numbers[i];
    }

    return formattedNumber;
  };
