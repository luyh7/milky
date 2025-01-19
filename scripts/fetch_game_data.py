import os
import json
import sqlite3
import requests

# 数据源 URL
DATA_URL = "https://raw.githubusercontent.com/silent1b/MWIData/main/init_client_info.json"

# 输出文件路径
OUTPUT_DIR = "./data"
OUTPUT_JSON = f"{OUTPUT_DIR}/data.json"
OUTPUT_SQLITE = f"{OUTPUT_DIR}/data.db"


def fetch_data(url):
    """
    从远程获取 JSON 数据
    :param url: 数据源 URL
    :return: JSON 数据
    """
    response = requests.get(url)
    response.raise_for_status()
    return response.json()


def process_data(data):
    """
    处理游戏数据（示例：输出 itemDetailMap 的数量）
    :param data: 原始 JSON 数据
    """
    item_detail_map = data.get("itemDetailMap", {})
    print(f"itemDetailMap 包含 {len(item_detail_map)} 项数据")
    # 此处可以对数据进行更详细的处理逻辑
    return data


def save_as_json(data, output_file):
    """
    保存数据为 JSON 文件
    :param data: 数据
    :param output_file: 输出文件路径
    """
    os.makedirs(os.path.dirname(output_file), exist_ok=True)  # 确保目录存在
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def save_as_sqlite(data, output_file):
    """
    清空并保存数据到 SQLite 数据库
    :param data: 数据
    :param output_file: SQLite 文件路径
    """
    os.makedirs(os.path.dirname(output_file), exist_ok=True)  # 确保目录存在
    conn = sqlite3.connect(output_file)
    cursor = conn.cursor()

    # 创建并清空 leaderboard 表
    cursor.execute("DROP TABLE IF EXISTS leaderboard")
    cursor.execute("CREATE TABLE leaderboard (rank INTEGER, name TEXT, score INTEGER)")
    for rank, player in enumerate(data.get("leaderboard", []), start=1):
        cursor.execute(
            "INSERT INTO leaderboard (rank, name, score) VALUES (?, ?, ?)",
            (rank, player["name"], player["score"]),
        )

    # 创建并清空 products 表
    cursor.execute("DROP TABLE IF EXISTS products")
    cursor.execute("CREATE TABLE products (name TEXT, price REAL, recipe TEXT)")
    for product in data.get("products", []):
        cursor.execute(
            "INSERT INTO products (name, price, recipe) VALUES (?, ?, ?)",
            (product["name"], product["price"], json.dumps(product["recipe"])),
        )

    conn.commit()
    conn.close()


def main():
    # 获取原始数据
    raw_data = fetch_data(DATA_URL)

    # 处理数据
    processed_data = process_data(raw_data)

    # 保存为 JSON 和 SQLite
    save_as_json(processed_data, OUTPUT_JSON)
    save_as_sqlite(processed_data, OUTPUT_SQLITE)

    print("数据处理完成，已保存为 JSON 和 SQLite 文件。")


if __name__ == "__main__":
    main()
