-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 15-Jul-2020 às 19:19
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `ldxps-database`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

CREATE TABLE `clientes` (
  `CDCL` varchar(36) NOT NULL COMMENT 'Código do cliente',
  `DSNOME` varchar(50) NOT NULL COMMENT 'Nome do cliente',
  `IDTIPO` char(2) NOT NULL DEFAULT 'PF' COMMENT 'Tipo de pessoa\r\n''PF'' - Pessoa física;\r\n''PJ'' - Pessoa jurídica.',
  `CDVEND` varchar(36) DEFAULT NULL COMMENT 'Código do vendedor',
  `DSLIM` decimal(15,2) NOT NULL COMMENT 'Limite de crédito'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabela de cadastro de clientes';

--
-- Extraindo dados da tabela `clientes`
--

INSERT INTO `clientes` (`CDCL`, `DSNOME`, `IDTIPO`, `CDVEND`, `DSLIM`) VALUES
('0000', 'Paulo', 'PF', '0000', '100.33'),
('0001', 'Nikolas', 'PF', '0001', '100.33'),
('0002', 'Loranzinho', 'PF', '0000', '100.33'),
('1111', 'Android', 'PJ', '0000', '1045.50');

-- --------------------------------------------------------

--
-- Estrutura da tabela `vendedores`
--

CREATE TABLE `vendedores` (
  `CDVEND` varchar(36) NOT NULL COMMENT 'Código do vendedor',
  `DSNOME` varchar(50) NOT NULL COMMENT 'Nome do vendedor',
  `CDTAB` int(11) NOT NULL COMMENT 'Código da tabela de preços padrão',
  `DTNASC` date DEFAULT NULL COMMENT 'Data de nascimento'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabela de cadastro de vendedores';

--
-- Extraindo dados da tabela `vendedores`
--

INSERT INTO `vendedores` (`CDVEND`, `DSNOME`, `CDTAB`, `DTNASC`) VALUES
('0000', 'Harley de Brito', 2020, '2020-07-14'),
('0001', 'Sabrina', 2020, '2020-07-13'),
('3333', 'Jon Snow', 20, NULL),
('5050', 'John Cena', 78, '1996-07-20');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`CDCL`),
  ADD KEY `fk_vendedores` (`CDVEND`);

--
-- Índices para tabela `vendedores`
--
ALTER TABLE `vendedores`
  ADD PRIMARY KEY (`CDVEND`);

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `fk_vendedores` FOREIGN KEY (`CDVEND`) REFERENCES `vendedores` (`CDVEND`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
