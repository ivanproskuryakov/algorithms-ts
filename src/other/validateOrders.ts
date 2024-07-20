/**
 * Надо написать метод validateOrders, который валидирует входящие транзакции.
 * Метод принимает массив транзакций (`Transaction[]`) и баланс пользователя (`number`).
 * Метод возвращает массив результатов валидации (`TransactionResult[]`).
 *
 * Правила применения транзакций:
 * - Транзакции должны быть обработаны от меньшего TransactionId к большему.
 * - Bet уменьшает баланс, Win увеличивает (Success).
 * - Баланс пользователя не может быть отрицательным (LowBalance).
 *
 * - Транзакции «группируются» по OrderId: если транзакция не может быть обработана, последующие транзакции в группе пропускаются (NotAllowed).
 *   «Группировка» не влияет на порядок обработки транзакций, а лишь указывает на наличие связи между транзакциями.
 *
 * - Если TransactionId повторяется, транзакция считается невалидной (TransactionAlreadyExists),
 *   но последующие транзакции в группе должны быть обработаны.
*/

type Transaction = {
  transactionId: number;
  orderId: number;
  amount: number;
  transactionType: 'Bet' | 'Win';
}

enum TransactionStatus {
  Success = 0,
  TransactionAlreadyExists = 1,
  NotAllowed = 2,
  LowBalance = 3,
}

type TransactionResult = {
  transactionId: number;
  status: TransactionStatus;
}

type TransactionResultExt = {
  tx: Transaction;
  status: TransactionStatus;
}

const validateOrders = (txs: Transaction[], amount: number): TransactionResult[] => {
  const result: TransactionResultExt[] = [];
  const txsSorted = txs.sort((a: Transaction, b: Transaction) => a.transactionId - b.transactionId);

  for (let i = 0; i < txsSorted.length; i++) {
    const tx = txsSorted[i];
    const txExisting = result.filter(_ => _.tx.transactionId === tx.transactionId);

    // TransactionAlreadyExists
    if (txExisting.length > 0) {
      result.push({
        tx,
        status: TransactionStatus.TransactionAlreadyExists,
      })

      continue;
    }

    // LowBalance
    const diff = amount - tx.amount;
    const ordersExistingBet = result.filter(
      _ => _.tx.orderId === tx.orderId && _.tx.transactionType === 'Bet'
    );

    if (diff < 0 && tx.transactionType === 'Bet' && ordersExistingBet.length === 0) {
      result.push({
        tx,
        status: TransactionStatus.LowBalance,
      })

      continue;
    }

    // NotAllowed
    const txExistingNotAllowed = result
      .filter(_ => _.tx.orderId === tx.orderId && [
        TransactionStatus.TransactionAlreadyExists,
        TransactionStatus.LowBalance,
      ].includes(_.status));

    if (txExistingNotAllowed.length > 0) {
      result.push({
        tx,
        status: TransactionStatus.NotAllowed,
      })

      continue;
    }

    // Success
    result.push({
      tx,
      status: TransactionStatus.Success,
    });
  }

  return result.map(item => {
    return {
      transactionId: item.tx.transactionId,
      status: item.status,
    }
  });
}

















