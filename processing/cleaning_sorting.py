import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('data/data-test.csv', index_col=0)

# Filtering all establishments which have the amenity feature (B), defined as "Blacks frequent" in the Damron Guides
black_establishments = df[
    df['amenfeat_1'].isin(['(B)']) |
    df['amenfeat_2'].isin(['(B)']) |
    df['amenfeat_3'].isin(['(B)']) |
    df['amenfeat_4'].isin(['(B)']) |
    df['amenfeat_5'].isin(['(B)']) |
    df['amenfeat_6'].isin(['(B)']) |
    df['amenfeat_7'].isin(['B'])
]

# Likewise, filtering all establishments which have amenity feature (L), defined as "Ladies" in the Damron Guides
lesbian_establishments = df[
    df['amenfeat_1'].isin(['(L)']) |
    df['amenfeat_2'].isin(['(L)']) |
    df['amenfeat_3'].isin(['(L)']) |
    df['amenfeat_4'].isin(['(L)']) |
    df['amenfeat_5'].isin(['(L)']) |
    df['amenfeat_6'].isin(['(L)']) |
    df['amenfeat_7'].isin(['L'])
]

# Exporting the above variables to .csv

# black_establishments.to_csv('black_establishments_1988.csv', index=False)
# lesbian_establishments.to_csv('lesbian_establishments_1988.csv', index=False)

black_establishments.plot()
plt.show()

