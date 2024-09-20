from pymongo import MongoClient

# Connect to mongodb
client = MongoClient('localhost', 27017)

# Create test database
db = client['test']

# Create test collection
coords_data = db['coords']

# Insert a dummy document and delete it right away
dummy_data = {'dummy': True}
coords_data.insert_one(dummy_data)
coords_data.delete_one({'dummy': True})

# Print confirmation message
print("Database 'test' and collection 'coords' created.")
