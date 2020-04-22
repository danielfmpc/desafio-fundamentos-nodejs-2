import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionsRepository);
    const transaction = await transactionRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transation not found', 404);
    }

    await transactionRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
